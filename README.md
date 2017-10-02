formatruby
===================

This plugins adds a new ruby formater to C9 based on rufo.

Requirements
------------

 * gem install rufo


Installation on c9.io
---------------------

Run the following in c9 terminal:

    # Create a folder
    mkdir ~/.c9/plugins

    # Clone the plugin
    git clone https://github.com/firstdraft/formatruby.git ~/.c9/plugins/formatruby

    # Click Cloud9 -> Open Your Init Script and add the below code
    services.pluginManager.loadPackage([
      "~/.c9/plugins/formatruby/package.json",
    ])

    # Refresh the page

License
-------

formatruby is licensed under the AGPL version 3
