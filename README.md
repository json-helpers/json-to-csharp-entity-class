# json-to-csharp-entity-class
[![npm version](https://badge.fury.io/js/json-to-csharp-entity-class.svg)](https://badge.fury.io/js/json-to-csharp-entity-class)

A [quicktype](https://github.com/quicktype/quicktype) library that generates simple C# EntityClasses from JSON.

Example input:

```
{
    "text": "Example",
    "complete": true
}
```

[Example output](https://docs.microsoft.com/en-us/azure/app-service-mobile/app-service-mobile-dotnet-backend-how-to-use-server-sdk#define-table-controller):

```
namespace QuickType
{
    using System;
    using System.Collections.Generic;

    public partial class TestClass : EntityData
    {
        public string Text { get; set; }
        public bool Complete { get; set; }
    }
}
```
Because of the way this library was built, it is nearly as flexible as `quicktype`. Here is an example:
```
npm start -- "example/comment.json" --namespace NewNamespace
```
These ```quicktype``` options can be used all over the place! Check out the [README](https://github.com/quicktype/quicktype/blob/master/README.md) for more examples that can be applied to this tool.

## Example Usage
`npm install`

`npm install --only=dev`

`npm start example/comment.json`

