#!/usr/bin/env sh
set -e

yarn build

cd public

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:sunwayihep/SunsKitchen.git master:gh-pages

cd -