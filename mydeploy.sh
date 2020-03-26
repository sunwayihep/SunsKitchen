#!/usr/bin/env sh
set -e

yarn build

cd public

git init
git add -A
git commit -m 'deploy'

# Deploy to Github Pages
git push -f git@github.com:sunwayihep/SunsKitchen.git master:gh-pages

# Deploy to Gitee Pages
git push -f git@gitee.com:sunwayihep/SunsKitchen.git master:gh_pages
cd -
