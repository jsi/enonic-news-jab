var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {
    var data = getData();
    var apps = [];
    for (var id in data.hits) {
        apps.push(data.hits[id]);
    }

    var view = resolve('market.html');

    var body = thymeleaf.render(view, {
        apps: apps
    });

    return {
        body: body
    }
};

var getData = function () {
    return {
        "hits": {
            "com.enonic.app.auth0idprovider": {
                "description": "Add Auth0 authentication to your Enonic XP installation",
                "displayName": "Auth0 ID Provider",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/6ed9b1c7-b254-4b32-a198-57acf1b3d84b:678ad95738692c11eca275efd530eb000bb01b96/auth0.png",
                "latestVersion": "2.0.2",
                "name": "com.enonic.app.auth0idprovider",
                "url": "https://market.enonic.com/vendors/enonic/auth0-idprovider",
                "versions": {
                    "2.0.2": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/auth0idprovider/2.0.2/auth0idprovider-2.0.2.jar"
                    },
                    "2.0.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/auth0idprovider/2.0.1/auth0idprovider-2.0.1.jar"
                    },
                    "2.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/auth0idprovider/2.0.0/auth0idprovider-2.0.0.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/auth0idprovider/1.0.1/auth0idprovider-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/auth0idprovider/1.0.0/auth0idprovider-1.0.0.jar"
                    }
                }
            },
            "com.rubicksman.app.chatrify": {
                "description": "Add full-featured chat capabilites to your Enonic XP sites.",
                "displayName": "Chatrify app",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/a03691d2-5169-4213-bbdd-83139275ccf9:5b953af5bf3d2bb9938db3b8c693ef9780226b7a/logo.svg",
                "latestVersion": "1.2.0",
                "name": "com.rubicksman.app.chatrify",
                "url": "https://market.enonic.com/vendors/michael-lazell/com.rubicksman.app.chatrify",
                "versions": {
                    "1.2.0": {
                        "applicationUrl": "https://bintray.com/artifact/download/mla/maven/com/rubicksman/app/chatrify/1.2.0/chatrify-1.2.0.jar"
                    },
                    "1.1.2": {
                        "applicationUrl": "https://bintray.com/artifact/download/mla/maven/com/rubicksman/app/chatrify/1.1.2/chatrify-1.1.2.jar"
                    },
                    "1.1.1": {
                        "applicationUrl": "https://bintray.com/artifact/download/mla/maven/com/rubicksman/app/chatrify/1.1.1/chatrify-1.1.1.jar"
                    }
                }
            },
            "com.enonic.app.chucknorris": {
                "description": "A Chuck Norris fact widget",
                "displayName": "Chuck Norris",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/1c700535-289d-4563-883f-cb8d4ec69b6a:43f4099ef34bd5fa69c7ab886d971be70cba17db/application.svg",
                "latestVersion": "1.0.0",
                "name": "com.enonic.app.chucknorris",
                "url": "https://market.enonic.com/vendors/enonic/chuck-norris-widget",
                "versions": {
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/chucknorris/1.0.0/chucknorris-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.contentviewer": {
                "description": "Inspect your content object JSON",
                "displayName": "Content viewer",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/3506a87f-5d03-4ab6-95e1-ac8a1d52d327:2fe03d8e1a95ef45be76814a84094ab67b542e95/Content%20viewer_cleaned.svg",
                "latestVersion": "1.4.0",
                "name": "com.enonic.app.contentviewer",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.contentviewer",
                "versions": {
                    "1.4.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.4.0/contentviewer-1.4.0.jar"
                    },
                    "1.3.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.3.0/contentviewer-1.3.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.2.0/contentviewer-1.2.0.jar"
                    },
                    "1.1.4": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.1.4/contentviewer-1.1.4.jar"
                    },
                    "1.1.3": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.1.3/contentviewer-1.1.3.jar"
                    },
                    "1.1.2": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.1.2/contentviewer-1.1.2.jar"
                    },
                    "1.1.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.1.1/contentviewer-1.1.1.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.1.0/contentviewer-1.1.0.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/contentviewer/1.0.0/contentviewer-1.0.0.jar"
                    }
                }
            },
            "openxp.app.contenthive": {
                "description": "ContentHive simply creates dummy text and images for your Enonic XP applications. ",
                "displayName": "ContentHive",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/772cde36-342a-45a1-a615-9eb138eaf5c9:91ab9142197bc17d63f2fbb0ff45c834af5e46bb/honeycombs-297874.svg",
                "latestVersion": "1.4.1",
                "name": "openxp.app.contenthive",
                "url": "https://market.enonic.com/vendors/rune-forberg/openxp.app.contenthive",
                "versions": {
                    "1.4.1": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.4.1/contenthive-1.4.1.jar"
                    },
                    "1.4.0": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.4.0/contenthive-1.4.0.jar"
                    },
                    "1.3.0": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.3.0/contenthive-1.3.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.2.0/contenthive-1.2.0.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.0.1/contenthive-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/1.0.0/contenthive-1.0.0.jar"
                    },
                    "0.9.9": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.9/contenthive-0.9.9.jar"
                    },
                    "0.9.8": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.8/contenthive-0.9.8.jar"
                    },
                    "0.9.7": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.7/contenthive-0.9.7.jar"
                    },
                    "0.9.6": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.6/contenthive-0.9.6.jar"
                    },
                    "0.9.5": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.5/contenthive-0.9.5.jar"
                    },
                    "0.9.4": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.4/contenthive-0.9.4.jar"
                    },
                    "0.9.3": {
                        "applicationUrl": "http://repo.enonic.com/public/openxp/app/contenthive/0.9.3/contenthive-0.9.3.jar"
                    }
                }
            },
            "io.selbekk.cookieLine": {
                "description": "Add a cookie notification line without the hassle of making one",
                "displayName": "Cookie Line",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/77c319a8-6f0c-4b43-bd88-e0291b645760:f5d06f6d54a1bcb3820b8fea638b2b07bf279b13/cookie-line.svg",
                "latestVersion": "1.1.1",
                "name": "io.selbekk.cookieLine",
                "url": "https://market.enonic.com/vendors/selbekk/io.selbekk.cookieline",
                "versions": {
                    "1.1.1": {
                        "applicationUrl": "https://bintray.com/artifact/download/selbekk/maven/io/selbekk/cookieLine/1.1.1/cookieLine-1.1.1.jar"
                    }
                }
            },
            "com.enonic.app.corporate.theme": {
                "description": "Design and build a demo company web site with customizable modules.",
                "displayName": "Corporate Theme",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/d1aeb3d8-5d20-4591-98ef-eb3943a8f2ac:010271402a4872b7d31c2de148cbfd366bad8c50/application.svg",
                "latestVersion": "1.1.2",
                "name": "com.enonic.app.corporate.theme",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.corporate.theme",
                "versions": {
                    "1.1.2": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/corporate.theme/1.1.2/corporate.theme-1.1.2.jar"
                    },
                    "1.1.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/corporate.theme/1.1.1/corporate.theme-1.1.1.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/corporate.theme/1.1.0/corporate.theme-1.1.0.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/corporate.theme/1.0.0/corporate.theme-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.app-cronjob": {
                "description": "Enables a simple cron-scheduling of jobs.",
                "displayName": "CronJob",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/4c1e9ce3-87d5-46a9-8bb2-43a04a72021c:a3a362d53405001309b9a0e3f694a3b405e9456a/Simpleicons_Business_watch.svg",
                "latestVersion": "0.4.0",
                "name": "com.enonic.app.app-cronjob",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.cronjob",
                "versions": {
                    "0.4.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/app-cronjob/0.4.0/app-cronjob-0.4.0.jar"
                    }
                }
            },
            "systems.rcd.enonic.datatoolbox": {
                "description": "Visualize and manipulate your Enonic XP data.",
                "displayName": "Data Toolbox",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/189bfb07-06e6-430a-8442-49ff4dbdc4d3:aba5eb2b0f06c55df97e11a0584feaa8566a68c0/market-icon.svg",
                "latestVersion": "2.2.0",
                "name": "systems.rcd.enonic.datatoolbox",
                "url": "https://market.enonic.com/vendors/glenn-ricaud/data-toolbox",
                "versions": {
                    "2.2.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.2.0/datatoolbox-2.2.0.jar"
                    },
                    "2.1.7": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.7/datatoolbox-2.1.7.jar"
                    },
                    "2.1.6": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.6/datatoolbox-2.1.6.jar"
                    },
                    "2.1.5": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.5/datatoolbox-2.1.5.jar"
                    },
                    "2.1.4": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.4/datatoolbox-2.1.4.jar"
                    },
                    "2.1.3": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.3/datatoolbox-2.1.3.jar"
                    },
                    "2.1.2": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.2/datatoolbox-2.1.2.jar"
                    },
                    "2.1.1": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.1/datatoolbox-2.1.1.jar"
                    },
                    "2.1.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.1.0/datatoolbox-2.1.0.jar"
                    },
                    "2.0.1": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.0.1/datatoolbox-2.0.1.jar"
                    },
                    "2.0.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/2.0.0/datatoolbox-2.0.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.2.0/datatoolbox-1.2.0.jar"
                    },
                    "1.1.1": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.1.1/datatoolbox-1.1.1.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.1.0/datatoolbox-1.1.0.jar"
                    },
                    "1.0.6": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.6/datatoolbox-1.0.6.jar"
                    },
                    "1.0.5": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.5/datatoolbox-1.0.5.jar"
                    },
                    "1.0.4": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.4/datatoolbox-1.0.4.jar"
                    },
                    "1.0.3": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.3/datatoolbox-1.0.3.jar"
                    },
                    "1.0.2": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.2/datatoolbox-1.0.2.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.1/datatoolbox-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://dl.bintray.com/rcd-systems/rcd-repo/systems/rcd/enonic/datatoolbox/1.0.0/datatoolbox-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.dictaphone": {
                "description": "PWA recorder of voice memos",
                "displayName": "Dictaphone",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/fa8ddd20-d20d-40e8-82c9-39e841ec5740:db126de55ea8f3f272b0f66ead78706022d6c5ac/application.svg",
                "latestVersion": "1.0.0",
                "name": "com.enonic.app.dictaphone",
                "url": "https://market.enonic.com/vendors/enonic/dictaphone",
                "versions": {
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/dictaphone/1.0.0/dictaphone-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.disqus": {
                "description": "Add Disqus comments to pages on Enonic XP websites.",
                "displayName": "Disqus",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/ec69e4d6-e01e-41d6-879f-5e3c1b7f421d:079f47f3b132a7e6679229d2eda78b57d088ca54/Disqus_cleaned.svg",
                "latestVersion": "1.3.0",
                "name": "com.enonic.app.disqus",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.disqus",
                "versions": {
                    "1.3.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/disqus/1.3.0/disqus-1.3.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/disqus/1.2.0/disqus-1.2.0.jar"
                    }
                }
            },
            "com.enonic.app.facebook.pixel": {
                "description": "Simple app to add a Facebook pixel to any website",
                "displayName": "Facebook Pixel",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/4b93cd9f-a7ff-42b9-a021-30e74297896d:906928ccd80884fb93265a192d8a05f6f07c0523/application.svg",
                "latestVersion": "1.0.0",
                "name": "com.enonic.app.facebook.pixel",
                "url": "https://market.enonic.com/vendors/enonic/facebook-pixel",
                "versions": {
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/facebook.pixel/1.0.0/facebook.pixel-1.0.0.jar"
                    }
                }
            },
            "io.selbekk.favicon": {
                "description": "Add favicons for all devices with a single upload",
                "displayName": "Favicon",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/51f8d6ef-c7db-47bd-aa5d-8a6e3da1d67e:2df7625fb6fd508cb0874730d8f812d52670aff1/favicon_cleaned.svg",
                "latestVersion": "1.0.2",
                "name": "io.selbekk.favicon",
                "url": "https://market.enonic.com/vendors/selbekk/io.selbekk.favicon",
                "versions": {
                    "1.0.2": {
                        "applicationUrl": "https://bintray.com/artifact/download/selbekk/maven/io/selbekk/favicon/1.0.2/favicon-1.0.2.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "https://bintray.com/artifact/download/selbekk/maven/io/selbekk/favicon/1.0.1/favicon-1.0.1.jar"
                    }
                }
            },
            "io.selbekk.feedback": {
                "description": "Get feedback from your users!",
                "displayName": "Feedback",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/22d560e6-8ad0-4bf6-bff7-249fb6c3ddbd:3b2c7a5cba6a3e2075ef7da7dd088e8b5f4249b1/feedback-logo.svg",
                "latestVersion": "1.0.1",
                "name": "io.selbekk.feedback",
                "url": "https://market.enonic.com/vendors/selbekk/io.selbekk.feedback",
                "versions": {
                    "1.0.1": {
                        "applicationUrl": "https://bintray.com/artifact/download/selbekk/maven/io/selbekk/feedback/1.0.1/feedback-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "https://bintray.com/artifact/download/selbekk/maven/io/selbekk/feedback/1.0.0/feedback-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.app-gitpull": {
                "description": "Pulls changes from multiple configured git repositories.",
                "displayName": "GitPull",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/bb3f1a34-27e7-4f53-8acc-4505de022304:a6f9ec0dbf1a7915cff4c433fb67b9589b81c843/GitPull.svg",
                "latestVersion": "1.0.0",
                "name": "com.enonic.app.app-gitpull",
                "url": "https://market.enonic.com/vendors/enonic/gitpull",
                "versions": {
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/app-gitpull/1.0.0/app-gitpull-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.ga": {
                "description": "Track and report website traffic with Google Analytics",
                "displayName": "Google Analytics",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/3a1b118a-359a-4cdd-8640-3016d93a920c:982863b522afa330d773008befdf44b678745bcc/Google%20Analytics.svg",
                "latestVersion": "1.7.0",
                "name": "com.enonic.app.ga",
                "url": "https://market.enonic.com/vendors/enonic/google-analytics",
                "versions": {
                    "1.7.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.7.0/ga-1.7.0.jar"
                    },
                    "1.6.3": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.6.3/ga-1.6.3.jar"
                    },
                    "1.6.2": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.6.2/ga-1.6.2.jar"
                    },
                    "1.6.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.6.1/ga-1.6.1.jar"
                    },
                    "1.6.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.6.0/ga-1.6.0.jar"
                    },
                    "1.5.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.5.0/ga-1.5.0.jar"
                    },
                    "1.4.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.4.0/ga-1.4.0.jar"
                    },
                    "1.3.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.3.0/ga-1.3.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.2.0/ga-1.2.0.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.1.0/ga-1.1.0.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/ga/1.0.0/ga-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.google-cse": {
                "description": "Googles custom search on your page",
                "displayName": "Google Custom Search Engine",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/bef7e7ae-19bf-40c4-9c93-f30f894da1ef:28b7391cc9556823c22d77d406cad6da9b377cba/google-cse.svg",
                "latestVersion": "1.0.0",
                "name": "com.enonic.app.google-cse",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.google.cse",
                "versions": {
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google-cse/1.0.0/google-cse-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.googlemaps": {
                "description": "Add Google Maps parts to your page",
                "displayName": "Google Maps",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/281b0da2-0130-4f75-8604-8b534713f456:71dcb89f3e40aa8415262a0d870aa419faab6a05/googlemap.svg",
                "latestVersion": "1.2.0",
                "name": "com.enonic.app.googlemaps",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.googlemaps",
                "versions": {
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/googlemaps/1.2.0/googlemaps-1.2.0.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/googlemaps/1.1.0/googlemaps-1.1.0.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/googlemaps/1.0.1/googlemaps-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/googlemaps/1.0.0/googlemaps-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.google.tagmanager": {
                "description": "Add the Google Tag Manager snippet to your site.",
                "displayName": "Google Tag Manager",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/bcd804ac-325f-4170-9b20-5a0732a5afa9:e22131129c16388fdf292dd34fd067ca48f106eb/Google%20Tag%20Manager_cleaned.svg",
                "latestVersion": "1.6.1",
                "name": "com.enonic.app.google.tagmanager",
                "url": "https://market.enonic.com/vendors/enonic/com.enonic.app.google.tagmanager",
                "versions": {
                    "1.6.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.6.1/google.tagmanager-1.6.1.jar"
                    },
                    "1.6.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.6.0/google.tagmanager-1.6.0.jar"
                    },
                    "1.5.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.5.0/google.tagmanager-1.5.0.jar"
                    },
                    "1.4.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.4.0/google.tagmanager-1.4.0.jar"
                    },
                    "1.3.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.3.0/google.tagmanager-1.3.0.jar"
                    },
                    "1.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.2.0/google.tagmanager-1.2.0.jar"
                    },
                    "1.1.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.1.0/google.tagmanager-1.1.0.jar"
                    },
                    "1.0.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.0.1/google.tagmanager-1.0.1.jar"
                    },
                    "1.0.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/google.tagmanager/1.0.0/google.tagmanager-1.0.0.jar"
                    }
                }
            },
            "com.enonic.app.graphiql": {
                "description": "An in-browser IDE for exploring GraphQL",
                "displayName": "GraphiQL - beta",
                "iconUrl": "https://market.enonic.com/applications/_/attachment/inline/e348923d-cc10-46fa-abdc-274c44c01e1a:e0edefea2671fa90952f3324e0be23f8498f67ff/graphiql.png",
                "latestVersion": "0.2.3",
                "name": "com.enonic.app.graphiql",
                "url": "https://market.enonic.com/vendors/enonic/graphiql",
                "versions": {
                    "0.2.3": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/graphiql/0.2.3/graphiql-0.2.3.jar"
                    },
                    "0.2.2": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/graphiql/0.2.2/graphiql-0.2.2.jar"
                    },
                    "0.2.1": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/graphiql/0.2.1/graphiql-0.2.1.jar"
                    },
                    "0.2.0": {
                        "applicationUrl": "http://repo.enonic.com/public/com/enonic/app/graphiql/0.2.0/graphiql-0.2.0.jar"
                    }
                }
            }
        },
        "total": 53
    }
};