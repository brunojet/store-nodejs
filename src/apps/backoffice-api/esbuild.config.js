const { readFileSync } = require('fs');
const path = require('path');

// Plugin para resolver aliases TypeScript
const aliasPlugin = {
    name: 'alias',
    setup(build) {
        // Registrar o resolver para @shared
        build.onResolve({ filter: /^@shared\// }, args => {
            const relativePath = args.path.replace('@shared/', '');
            const resolvedPath = path.resolve(__dirname, '../../../libs/shared', relativePath);
            return { path: resolvedPath };
        });
    }
};

module.exports = {
    plugins: [aliasPlugin]
};
