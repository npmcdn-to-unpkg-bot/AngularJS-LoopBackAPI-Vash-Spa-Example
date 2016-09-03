module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
        
    	pkg: grunt.file.readJSON('package.json'),
    	
    	//Configure Docular
        docular: {
            showDocularDocs: true,
            showAngularDocs: true,
            groupTitle: 'My documentation site',
            groups: [
                     {
                         groupTitle: 'Site Controls',
                         groupId: 'siteControls',
                         files: grunt.file.expand(['client/js/**/*.js'])
                     }
                 ]
        },
	    docularserver: {
	        targetDir: "//docular_generated",
	        port: 8888
	        }
    
    });
    
    // Load the plugin that provides the "docular" tasks.
    grunt.loadNpmTasks('grunt-docular');
 
    // Default task(s).
    grunt.registerTask('default', ['docular']);
 
};