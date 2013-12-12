bundle = bin 'one/onejs'

all 'dist/sdk.js'

target 'dist/sdk.js', '*.js', 'node_modules', ->
    bundle 'sdk.js -o dist/sdk.js'
