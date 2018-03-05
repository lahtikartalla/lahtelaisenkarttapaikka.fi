module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "comma-dangle": ["error", "never"],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to", "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
        "react/no-typos": "off"
    }
};