module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*-spec.js']
            }
        },
        jshint: {
            files: ['./public/**/*.js'],
            options: {
                force: true,
                jshintrc: './.jshintrc'
            }
        }
    });
    grunt.registerTask('test', ['jshint','mochaTest']);
    grunt.registerTask('build', ['jshint']);
};
