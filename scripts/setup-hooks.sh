#!/bin/bash

echo "Setting up Git hooks for strict TypeScript checking..."

# Set git hooks path
git config core.hooksPath .githooks

# Make pre-commit hook executable
chmod +x .githooks/pre-commit

echo "Git hooks configured successfully!"
echo "The following checks will run before each commit:"
echo "- TypeScript type checking"
echo "- ESLint linting"
echo "- Code formatting with clang-format"
echo ""
echo "To test all checks manually, run: npm run check-all"
