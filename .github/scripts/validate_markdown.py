import os
import sys
import requests
from github import Github
from frontmatter import Frontmatter as fm
from web3 import Web3

# Environment variables
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
REPO_NAME = os.getenv('GITHUB_REPOSITORY')
PR_NUMBER = os.getenv('PR_NUMBER')

# Initialize GitHub client
g = Github(GITHUB_TOKEN)
repo = g.get_repo(REPO_NAME)
pr = repo.get_pull(PR_NUMBER)

# Function to validate markdown files
def validate_markdown(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        post = fm.parse(content)
        metadata, markdown = post['attributes'], post['body']

        errors = []
        if 'title' not in metadata:
            errors.append('missing title')
        if 'summary' not in metadata:
            errors.append('missing summary')
        if 'date' not in metadata:
            errors.append('missing date')
        if 'address' not in metadata:
            errors.append('missing mainnet address')
        elif not Web3.isAddress(metadata['address']):
            errors.append('invalid address format')
        elif not Web3.isChecksumAddress(metadata['address']):
            errors.append('address is not checksummed')

        return errors

# Variable to track if any file has errors
has_errors = False

# Iterate over modified files in the PR
for file in pr.get_files():
    if file.filename.startswith('governance/votes/') and file.filename.endswith('.md'):
        errors = validate_markdown(file.filename)
        if errors:
          has_errors = True # Set has_errors to True if any errors are identified
            print(f"Validation errors in {file.filename}:")
            for error in errors:
                print(f"- {error}")

# Exit with a non-zero status code if any errors were found
if has_errors:
  sys.exit(1)
