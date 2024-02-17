/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    someSidebar: [
        {
            type: "link",
            href: "/prepverse-community",
            label: "Prepverse Community",
            className: "enterprise-badge",
        },
        {
            type: "category",
            label: "Getting Started",
            items: [
                {
                    type: "link",
                    href: "https://prepverse.github.io/LeetVerse",
                    label: "LeetVerse",
                    customProps: {
                        external: true,
                    },
                },
                {
                    type: "link",
                    href: "https://prepverse.github.io/CodePoint",
                    label: "CodePoint",
                    customProps: {
                        external: true,
                    },
                },
                "getting-started/overview",
                "getting-started/quickstart",
            ],
            className: "category-as-header",
        },
    ],
};