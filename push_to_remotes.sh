#!/bin/bash

# Define the branch you want to push
branch_name="main"

# List of remote repositories
remotes=("personal" "org")

# Iterate through the remote repositories and push to them
for remote in "${remotes[@]}"; do
    git push "$remote" "$branch_name"
done