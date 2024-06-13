$(document).ready(function() {
    $('#theme-select').change(function() {
        var theme = $(this).val();
        switch(theme) {
            case 'light':
                $('#theme-style').html(`
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding-top: 60px;
                        background-color: #ffffff;
                        color: #000000;
                    }
                    h1 {
                        margin-bottom: 20px;
                        color: #000000;
                        font-size: 24px;
                    }
                    .section-title {
                        margin-top: 40px;
                        color: #007bff;
                    }
                    .section-subtitle {
                        margin-top: 30px;
                        color: #5a5a5a;
                    }
                    .card {
                        margin-bottom: 20px;
                        background-color: #f8f9fa;
                        border-color: #dcdcdc;
                    }
                    .card-header {
                        background-color: #e9ecef;
                        color: #000000;
                        border-color: #dcdcdc;
                    }
                    .card-body {
                        color: #000000;
                    }
                    code {
                        background-color: #f8f9fa;
                        padding: 2px 4px;
                        border-radius: 4px;
                        color: #d63384;
                    }
                    pre {
                        background-color: #f8f9fa;
                        padding: 10px;
                        border-radius: 4px;
                        overflow: auto;
                        color: #000000;
                    }
                    .keyword {
                        color: #007bff;
                    }
                    .comment {
                        color: #008000;
                    }
                    .string {
                        color: #a31515;
                    }
                    .number {
                        color: #09885a;
                    }
                    .logo {
                        height: 50px;
                        margin-right: 10px;
                        vertical-align: middle;
                    }
                    .header-container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .theme-select {
                        margin-left: auto;
                    }
                    #sidebar .nav-link {
                        color: #000000;
                    }
                    #sidebar .nav-link:hover {
                        color: #007bff;
                    }
                    #sidebar .nav-link.ml-3 {
                        padding-left: 1.5rem;
                    }
                    .print-icon {
                        height: 30px;
                        margin-left: 10px;
                        cursor: pointer;
                        color: #ffffff; 
                    }
                    @media (max-width: 768px) {
                        h1 {
                            flex-basis: 100%;
                            text-align: center;
                            margin-top: 10px;
                        }
                        .theme-select {
                            margin: 0;
                            width: 100%;
                            text-align: center;
                            margin-top: 10px;
                        }
                        aside {
                            width: 100%;
                            position: relative;
                            top: auto;
                            bottom: auto;
                        }
                        main {
                            margin-left: 0;
                            padding: 20px;
                        }
                    }
                `);
                break;
            case 'dark':
            default:
                $('#theme-style').html(`
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding-top: 60px;
                        background-color: #1e1e1e;
                        color: #dcdcdc;
                    }
                    h1 {
                        margin-bottom: 20px;
                        color: #dcdcaa;
                        font-size: 24px;
                    }
                    .section-title {
                        margin-top: 40px;
                        color: #569cd6;
                    }
                    .section-subtitle {
                        margin-top: 30px;
                        color: #9cdcfe;
                    }
                    .card {
                        margin-bottom: 20px;
                        background-color: #252526;
                        border-color: #3c3c3c;
                    }
                    .card-header {
                        background-color: #2d2d30;
                        color: #dcdcaa;
                        border-color: #3c3c3c;
                    }
                    .card-body {
                        color: #dcdcdc;
                    }
                    code {
                        background-color: #1e1e1e;
                        padding: 2px 4px;
                        border-radius: 4px;
                        color: #9cdcfe;
                    }
                    pre {
                        background-color: #1e1e1e;
                        padding: 10px;
                        border-radius: 4px;
                        overflow: auto;
                        color: #dcdcaa;
                    }
                    .keyword {
                        color: #569cd6;
                    }
                    .comment {
                        color: #608b4e;
                    }
                    .string {
                        color: #d69d85;
                    }
                    .number {
                        color: #b5cea8;
                    }
                    .logo {
                        height: 50px;
                        margin-right: 10px;
                        vertical-align: middle;
                    }
                    .header-container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .theme-select {
                        margin-left: auto;
                    }
                    #sidebar .nav-link {
                        color: #dcdcdc;
                    }
                    #sidebar .nav-link:hover {
                        color: #ffffff;
                    }
                    #sidebar .nav-link.ml-3 {
                        padding-left: 1.5rem;
                    }
                    .print-icon {
                        height: 30px;
                        margin-left: 10px;
                        cursor: pointer;
                        color: #000000; 
                    }
                    @media (max-width: 768px) {
                        h1 {
                            flex-basis: 100%;
                            text-align: center;
                            margin-top: 10px;
                        }
                        .theme-select {
                            margin: 0;
                            width: 100%;
                            text-align: center;
                            margin-top: 10px;
                        }
                        aside {
                            width: 100%;
                            position: relative;
                            top: auto;
                            bottom: auto;
                        }
                        main {
                            margin-left: 0;
                            padding: 20px;
                        }
                    }
                `);
                break;
        }
    });

    // Smooth scroll to section
    $('#sidebar .nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('header').outerHeight() // Adjust for fixed header height
        }, 500);
    });

    // Print functionality
    $('#print-button').on('click', function() {
        window.print();
    });
});
