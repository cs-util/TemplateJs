/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: { path: 'node_modules' },
    includeOnly: 'src',
    reporterOptions: { dot: { collapsePattern: 'node_modules/[^/]*' } }
  },
  forbidden: [
    // No circular dependencies
    { name: 'no-circular', severity: 'error', from: {}, to: { circular: true } },

    // No orphan modules (files not imported by any other file)
    { name: 'no-orphans', severity: 'warn', from: {}, to: { orphan: true, pathNot: '\\.test\\.js$' } },

    // Forbid imports that bypass public APIs (e.g., deep imports into internal files of other components)
    // This is an example rule, can be customized for more complex projects.
    {
      name: 'no-deep-imports',
      severity: 'warn',
      from: { path: 'src/components/([^/]+)/.+' },
      to: { path: 'src/components/([^/]+)/.+', pathNot: '^src/components/$1/index\\.js' }
    },
    
    // Enforce a simple layered architecture: utils can't import from components
    {
        name: 'no-utils-importing-from-components',
        severity: 'error',
        from: { path: '^src/utils' },
        to:   { path: '^src/components' }
    }
  ]
};
