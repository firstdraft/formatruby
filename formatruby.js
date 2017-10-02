define(function(require, exports, module) {

    main.consumes = ["Plugin", "settings", "preferences", "format", "proc", "c9", "tabManager", "save",
        "error_handler", "dialog.error"
    ];
    main.provides = ["formatruby"];


    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;

        var proc = imports.proc;
        var tabManager = imports.tabManager;
        var c9 = imports.c9;

        var plugin = new Plugin("Murugan", main.consumes);
        var format = imports.format;

        function load() {
            format.on("format", function(e) {
                if (e.mode == "ruby") {
                    return formatCode(e.editor, e.mode);
                }
            });
        }

        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {

        });

        /***** Register and define API *****/

        function formatCode(editor) {
            var path = c9.workspaceDir + tabManager.focussedTab.path;

            proc.execFile("rufo", {
                args: [path],
                cwd: '/home/ubuntu/workspace'
            }, function(err, stdout, stderr) {

            });

            return true;
        }

        plugin.freezePublicAPI({
            formatCode: formatCode,
        });

        register(null, {
            "formatruby": plugin
        });
    }
});
