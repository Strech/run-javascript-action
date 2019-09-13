# Run JavaScript Action

TBD

# Usage:

```yaml
jobs:
  run_javascript:
    name: Run my script
    runs-on: ubuntu-latest

    steps:
      - uses: Strech/run-javascript-action@v0.1.0
        name: Get Berlin weather
        id: weather
        with:
          script: |
            // NOTE: You can output to the standard console
            console.log("You can output to the standard console")

            // NOTE: You also will have access to some libraries
            //       stored in the `$` object
            const response = await $.fetch("https://wttr.in/Berlin", {
              headers: { "User-Agent": "curl" }
             }).then(res => res.text());

            return response
      - name: Print weather
        run: |
          echo "${{ steps.weather.outputs.result }}"
```
