module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      options: {
        force: true
      }
      , dev: 'docs/**/*'
    }
    , mkdir: {
      all: {
        options: {
          create: ['docs']
        }
      }
    }
    , copy: {
      dev: {
        files: [
          {
            expand: true
            , cwd: 'www'
            , src: '**'
            , dest: 'docs/'
          }
        ]
      }
    }
    , bower: {
      dev: {
        base: 'bower_components'
        , dest: 'docs/lib'
        , options: {
          checkExistence: true
          , debugging: true
          , paths: {
            bowerDirectory: 'bower_components'
            , bowerrc: '.bowerrc'
            , bowerJson: 'bower.json'
          }
        }
      }
    }
    , browserSync: {
      dev: {
        bsFiles: {
        src : [
          'www/**/*.html'
          , 'www/**/*.js'
          , 'www/**/*.css'
        ]
      }
      , options: {
          server: {
            baseDir: "www"
            , routes: {
              "/lib": "bower_components"
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('main-bower-files');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['browserSync']);
  grunt.registerTask('deploy', ['clean', 'mkdir', 'bower', 'copy']);
};
