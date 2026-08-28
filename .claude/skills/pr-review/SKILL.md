---
name: pr-review
description: PR review best practices checklist for this repo — use when reviewing a pull request or preparing one for review (correctness, tests, security, scope, conventions).
---

# PR Review Best Practices

Use this checklist when reviewing a pull request (yours or someone else's) in this repo, or when preparing a branch for review before opening a PR.

## 1. Scope and size
- Confirm the PR does one coherent thing. Flag unrelated changes bundled in (drive-by refactors, formatting-only diffs mixed with logic changes) and suggest splitting them out.
- Check the diff size is reviewable. A PR that touches dozens of files for a small behavioral change usually hides an unnecessary refactor — ask why.

## 2. Correctness
- Read the actual logic change, not just the diff context. Trace through at least one non-trivial input by hand.
- Look for edge cases: empty/null inputs, race conditions, off-by-one errors, unhandled promise rejections.
- For this repo specifically: the installed `next` package has breaking changes vs. training data (see [AGENTS.md](../../../AGENTS.md)). If a change touches Next.js APIs (routing, data fetching, config), verify against `node_modules/next/dist/docs/` rather than assuming familiar behavior — flag any usage that looks like pre-breaking-change conventions.

## 3. Tests
- New behavior needs test coverage — unit tests (Vitest) for logic, Playwright e2e tests for user-facing flows.
- Check that tests actually exercise the change (not just happy-path smoke tests) and that they'd fail without the fix.
- Don't accept skipped/commented-out tests as a substitute for real coverage.

## 4. Security
- Check for injection risks (command, SQL, XSS) in anything touching user input, URLs, or shell/DB calls.
- Verify secrets, tokens, and credentials aren't hardcoded or logged.
- For API routes/server actions: confirm auth/authorization checks are present where expected.

## 5. Simplicity and reuse
- Flag speculative abstractions, unused flags, or config added for hypothetical future needs.
- Prefer the existing pattern in the codebase over a new one, unless the PR has a stated reason to diverge.
- Call out duplicated logic that could reuse an existing helper.

## 6. Conventions and style
- Match the repo's existing formatting, naming, and file structure — don't nitpick style that a linter/formatter already enforces.
- Check that new files land in the right place relative to existing structure (e.g., `app/` routing conventions).

## 7. Commit and PR hygiene
- Commit messages explain *why*, not just *what*.
- PR description states the problem being solved and how to verify it (test plan), not just a restatement of the diff.
- No debug output, commented-out code, or stray console logs left in.

## Output format when reviewing
When asked to review a PR, report findings grouped by severity (correctness/security first, then simplification/style), each with a concrete failure scenario or reason — not vague "consider improving X" comments. Prefer using the `code-review` skill for automated diff analysis; use this checklist to guide manual review judgment and to fill in repo-specific context the automated tool won't know.
