#!/usr/bin/env bash
# Whether Vercel or Netlify should build this push. Exit 0 skips the build and
# 1 builds it. A redeploy builds regardless: Netlify does not run the script,
# and Vercel runs it only if the Redeploy dialog's "Use project's Ignore Build
# Step" is ticked, then ignores its exit code.

# Neither build log is a terminal, but both render ANSI colours.
bold=$'\e[1m' dim=$'\e[2m' green=$'\e[32m' yellow=$'\e[33m' cyan=$'\e[36m'
reset=$'\e[0m'

build() { echo "🔨 $bold${green}Build:$reset $1"; }
skip() { echo "⏩ $bold${yellow}Skip:$reset $1"; }

# Each host names the two commits in variables of its own. They are printed,
# set or not, so a build log shows which ones each kind of deploy provides.
print() {
  local name
  for name; do
    if [[ -v $name ]]; then
      echo "🔹 $cyan$name$reset=${!name}"
    else
      echo "🔸 $cyan$name$reset ${dim}unset$reset"
    fi
  done
}

# Under `glob` a `*` stops at `/`, so the last one is the root docs alone.
excludes=(':^worker' ':^wrangler.jsonc' ':^.github' ':^.vscode' ':^.gitignore'
  ':^.gitattributes' ':^bin' ':^scaffolds' ':^source/_drafts' ':^tsconfig.json'
  ':^.prettierrc' ':^.prettierignore'
  ':(exclude,glob)*.md')

if [[ ${VERCEL-} == 1 ]]; then
  print VERCEL_ENV VERCEL_GIT_COMMIT_REF VERCEL_GIT_COMMIT_SHA \
    VERCEL_GIT_PREVIOUS_SHA
  from=${VERCEL_GIT_PREVIOUS_SHA-} to=${VERCEL_GIT_COMMIT_SHA-}
  excludes+=(':^netlify.toml' ':^netlify')
elif [[ ${NETLIFY-} == true ]]; then
  print CONTEXT HEAD COMMIT_REF CACHED_COMMIT_REF
  from=${CACHED_COMMIT_REF-} to=${COMMIT_REF-}
  excludes+=(':^vercel.json' ':^vercel')
else
  build 'neither VERCEL nor NETLIFY is set.'
  exit 1
fi
echo "📍 ${cyan}git rev-parse HEAD$reset: $(git rev-parse HEAD)"

# Netlify gives a build without cache its own commit as CACHED_COMMIT_REF.
if [[ -z $from || -z $to || $from == "$to" ]]; then
  build 'no earlier commit to compare with.'
elif ! git cat-file -e "$from^{commit}" 2>/dev/null; then
  build "$from is not in the clone."
elif ! git cat-file -e "$to^{commit}" 2>/dev/null; then
  build "$to is not in the clone."
elif git diff --quiet "$from" "$to" -- . "${excludes[@]}"; then
  skip "nothing outside the ignored paths changed since $from."
  exit 0
else
  build "files outside the ignored paths changed since $from."
fi
exit 1
