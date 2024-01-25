import os
import re
import requests
from github import Github
from frontmatter import Frontmatter as fm

# Constants
URL_REGEX = re.compile(
    r"(https?://(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?://(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
)

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
        elif not re.match(URL_REGEX, metadata['address']):
            errors.append('invalid mainnet address')

        # Additional validation logic goes here

        return errors

# Iterate over modified files in the PR
for file in pr.get_files():
    if file.filename.startswith('governance/votes/') and file.filename.endswith('.md'):
        errors = validate_markdown(file.filename)
        if errors:
            print(f"Validation errors in {file.filename}:")
            for error in errors:
                print(f"- {error}")
