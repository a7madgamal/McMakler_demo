import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem'

it('renders correctly: no props', () => {
  
  var testItem = {
    "_id": {"$id": "573c4f5a8ffd7cee218b458c"},
    "hasFurniture": false,
    "advertisementPrice": {"baseRent": 570, "sellPrice": 570},
    "userWishes": {"visibleAddress": false},
    "purpose": 0,
    "title": "Gro\u00dfz\u00fcgige Altbauwohnung mit Balkon und Einbauk\u00fcche",
    "additionalId": 131131,
    "advertisementAssets": {
      "0": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "1": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "2": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "3": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "4": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "5": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "6": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "7": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "8": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "9": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "10": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "11": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "12": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "13": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "14": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "15": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "16": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "17": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "18": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "19": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "20": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "21": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "22": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "23": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "24": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "25": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "26": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "27": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "28": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "29": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "30": {
        "titlePicture": true,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "31": {
        "titlePicture": true,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "32": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "33": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "34": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "35": {
        "titlePicture": false,
        "advertisementThumbnails": {
          "inventory_m": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746833, "usec": 0},
            "updatedAt": {"sec": 1503483397, "usec": 944000},
            "fileId": "thumbnail.5908c4916a1ca6.30802316.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 610,
              "height": 300,
              "size": 24789,
              "thumbnail": "inventory_m",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          },
          "thumb_xs": {
            "_id": {"object_i_d": {}},
            "createdAt": {"sec": 1493746834, "usec": 0},
            "updatedAt": {"sec": 1503483398, "usec": 87000},
            "fileId": "thumbnail.5908c492450ee8.42169230.jpg",
            "filename": "thumbnail_of_.jpg",
            "url": "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c492450ee8.42169230.jpg",
            "mimeType": "image/jpg",
            "metadata": {
              "width": 200,
              "height": 150,
              "size": 6263,
              "thumbnail": "thumb_xs",
              "transformation": "ad_image_thumbails",
              "filesystem": "thumbnails"
            }
          }
        }
      },
      "advertisementThumbnails": {
        "inventory_m": {"_id": {"$id": ""}},
        "thumb_xs": {"_id": {"$id": ""}}
      }
    },
    "realestateSummary": {
      "address": {
        "street": "Annaberger Stra\u00dfe",
        "number": "285",
        "postalCode": "09125",
        "city": "Chemnitz",
        "fullAddress": "Annaberger Stra\u00dfe 285, 09125 Chemnitz",
        "location": {
          "type": "Point",
          "coordinates": [50.79663, 12.918100000000001]
        }
      },
      "numberOfRooms": 3,
      "space": 120
    }
  };
  const tree = renderer.create(<ListItem item={testItem}/>).toJSON();
  expect(tree).toMatchSnapshot();
});