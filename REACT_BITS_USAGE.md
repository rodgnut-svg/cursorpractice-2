# React Bits Registry Usage Guide

## Registry Configuration

The React Bits registry is already configured in `components.json`:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

## Important Tips When Using React Bits Components with shadcn MCP

### 1. Initialize shadcn First
Always start by initializing `shadcn` using:
```bash
npx shadcn@latest init
```
After initialization, custom registries should be added to the generated `components.json` file.

### 2. For Vite Projects
If working with a Vite project:
- Ensure that path aliases are correctly configured in `vite.config.js`
- For IDE support, verify `jsconfig.json` (for JavaScript projects) or `tsconfig.json` (for TypeScript projects)

### 3. Check Component Dependencies
Review the documentation for any component being used to understand its dependencies. Required packages (e.g., `gsap`, `framer-motion`) should be installed before using components that depend on them.

### 4. Verify the Registry URL Format
The React Bits registry uses the URL format:
```
https://reactbits.dev/r/{name}.json
```

The `{name}` placeholder in this URL is automatically replaced by `shadcn` during component fetching. You don't need to manually replace it.

## Using React Bits Components

When using the shadcn MCP tools to add React Bits components:
- Use the registry prefix `@react-bits` when referencing components
- Example: `@react-bits/hyperspeed` or `@react-bits/[component-name]`
- The MCP tools will automatically handle the registry URL format
