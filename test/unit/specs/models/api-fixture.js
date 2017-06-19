/* eslint-disable */
const API_FIXTURE = {
  "title": "environment-registry",
  "version": "v1",
  "baseUri": "http://environment-registry.epimorphics.net/registry/def/test-area",
  "protocols": [
    "http"
  ],
  "mediaType": "application/json",
  "resources": [
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
              "description": "Only return register items whose status matches the given value"
            },
            "_view": {
              "name": "_view",
              "displayName": "View of the data",
              "typePropertyKind": "TYPE_EXPRESSION",
              "type": [
                "string"
              ],
              "required": false,
              "description": "Specifies a named view or subset of the data, e.g. 'with_metadata' or 'version_list'"
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
              "typePropertyKind": "INPLACE",
              "required": false,
              "description": "Specifies the version of the register that was in effect at the given XSD DateTime",
              "type": {
                "name": "type",
                "displayName": "type",
                "typePropertyKind": "TYPE_EXPRESSION",
                "type": [
                  "string"
                ],
                "enum": [
                  "csv",
                  "json",
                  "ttl",
                  "rdf",
                  "minecraft"
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
    },
    {
      "methods": [
        {
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
          "description": "Returns a JSON description of the identified version of the register",
          "displayName": "List a specific version of the register",
          "method": "get",
          "__METADATA__": {
            "primitiveValuesMeta": {
              "protocols": {
                "calculated": true
              }
            }
          }
        }
      ],
      "uriParameters": {
        "version": {
          "name": "version",
          "displayName": "version",
          "typePropertyKind": "TYPE_EXPRESSION",
          "type": [
            "string"
          ],
          "required": true,
          "__METADATA__": {
            "calculated": true,
            "primitiveValuesMeta": {
              "displayName": {
                "calculated": true
              },
              "type": {
                "insertedAsDefault": true
              },
              "required": {
                "insertedAsDefault": true
              }
            }
          }
        }
      },
      "relativeUri": "/:{version}",
      "displayName": "/:{version}",
      "__METADATA__": {
        "primitiveValuesMeta": {
          "displayName": {
            "calculated": true
          }
        }
      },
      "relativeUriPathSegments": [
        ":{version}"
      ],
      "absoluteUri": "http://environment-registry.epimorphics.net/registry/def/test-area/:{version}"
    }
  ]
};

export default {API_FIXTURE};
