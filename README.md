# Usage:

```yaml
jobs:
  comment:
    # ... omitted ...
    steps:
      - uses: distribusion/actions/run-javascript@master
        name: Run some JavaScript
        id: js
        with:
          script: |
            console.log("Hello")
            return "World"
      - name: Output HTTP response
        run: |
          echo "${{ steps.js.result }}"
```
