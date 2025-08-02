@echo off
echo Setting up Git hooks for strict TypeScript checking...

REM Set git hooks path
git config core.hooksPath .githooks

REM Make pre-commit hook executable (if on Unix-like system)
REM chmod +x .githooks/pre-commit

echo Git hooks configured successfully!
echo The following checks will run before each commit:
echo - TypeScript type checking
echo - ESLint linting
echo - Code formatting with clang-format
echo.
echo To test all checks manually, run: npm run check-all
