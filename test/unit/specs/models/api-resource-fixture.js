/* eslint-disable */
const FIXTURE =
{
  "methods": [
    {
      "queryParameters": {
        "non-member-properties": {
          "name": "non-member-properties",
          "displayName": "Return metadata only",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "boolean"
          ],
          "required": false,
          "description": "Only return metadata for the register, without listing members"
        },
        "firstPage": {
          "name": "firstPage",
          "displayName": "Return first page of results",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "boolean"
          ],
          "required": false,
          "description": "Equivalent to _page=0"
        },
        "_page": {
          "name": "_page",
          "displayName": "Page",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "number"
          ],
          "required": false,
          "description": "Return the given page of results"
        },
        "status": {
          "name": "status",
          "displayName": "Status filter",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": false,
          "description": "Only return register items whose status matches the given value",
          "enum": [
            "any",
            "accepted"
          ]
        },
        "_view": {
          "name": "_view",
          "displayName": "View of the data",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": false,
          "description": "Specifies a named view or subset of the data, e.g. 'with_metadata' or 'version_list'",
          "enum": [
            "with_metadata",
            "version_list"
          ]
        },
        "versionAt": {
          "name": "versionAt",
          "displayName": "Version at",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "datetime-only"
          ],
          "required": false,
          "description": "Specifies the version of the register that was in effect at the given XSD DateTime"
        },
        "_format": {
          "name": "_format",
          "displayName": "Version at",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": false,
          "description": "Specifies the version of the register that was in effect at the given XSD DateTime",
          "enum": [
            "csv",
            "json",
            "ttl",
            "rdf"
          ]
        },
        "std:code": {
          "name": "std:code",
          "displayName": "Filter by registry entry code",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": false,
          "description": "Only return those entries matching the given entry code"
        },
        "std:status": {
          "name": "std:status",
          "displayName": "Filter by registry entry status code",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": false,
          "description": "Only return those entries that have the given status code"
        },
        "min-std:dateFrom": {
          "name": "min-std:dateFrom",
          "displayName": "Filter by earliest date-from",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "date-only"
          ],
          "required": false,
          "description": "Only return those entries whose valid-from date is after the given date"
        },
        "max-std:dateFrom": {
          "name": "max-std:dateFrom",
          "displayName": "Filter by latest date-from",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "date-only"
          ],
          "required": false,
          "description": "Only return those entries whose valid-from date is before the given date"
        },
        "min-std:dateTo": {
          "name": "min-std:dateTo",
          "displayName": "Filter by earliest date-to",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "date-only"
          ],
          "required": false,
          "description": "Only return those entries whose valid-to date is after the given date"
        },
        "max-std:dateTo": {
          "name": "max-std:dateTo",
          "displayName": "Filter by latest date-to",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "date-only"
          ],
          "required": false,
          "description": "Only return those entries whose valid-to date is before the given date"
        }
      },
      "responses": {
        "200": {
          "code": "200",
          "body": {
            "application/json": {
              "name": "application/json",
              "displayName": "application/json",
              "typePropertyKind": "TYPE_EXPRESSION",
              "type": [
                "object"
              ],
              "__METADATA__": {
                "primitiveValuesMeta": {
                  "displayName": {
                    "calculated": true
                  },
                  "type": {
                    "insertedAsDefault": true
                  }
                }
              }
            }
          }
        }
      },
      "protocols": [
        "HTTP"
      ],
      "description": "Returns the JSON description of the register that is used for testing and demos",
      "displayName": "List the register",
      "method": "get",
      "__METADATA__": {
        "primitiveValuesMeta": {
          "protocols": {
            "calculated": true
          }
        }
      }
    },
    {
      "protocols": [
        "HTTP"
      ],
      "description": "Register a new item in the register",
      "displayName": "Add to the register",
      "method": "post",
      "__METADATA__": {
        "primitiveValuesMeta": {
          "protocols": {
            "calculated": true
          }
        }
      }
    }
  ],
  "relativeUri": "/",
  "displayName": "/",
  "__METADATA__": {
    "primitiveValuesMeta": {
      "displayName": {
        "calculated": true
      }
    }
  },
  "relativeUriPathSegments": [],
  "absoluteUri": "http://environment-registry.epimorphics.net/registry/def/test-area/"
};

export default FIXTURE;
