document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");

    document.getElementById("show-register").addEventListener("click", function () {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        formTitle.textContent = "Cadastre-se";
    });

    document.getElementById("show-login").addEventListener("click", function () {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        formTitle.textContent = "Entrar";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");

    document.getElementById("show-register").addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.add("hide");
        
        setTimeout(() => {
            loginForm.classList.add("hidden");
            loginForm.classList.remove("hide");

            registerForm.classList.remove("hidden");
            registerForm.classList.add("show");
            formTitle.textContent = "Cadastre-se";
        }, 500);
    });

    document.getElementById("show-login").addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.classList.add("hide");

        setTimeout(() => {
            registerForm.classList.add("hidden");
            registerForm.classList.remove("hide");

            loginForm.classList.remove("hidden");
            loginForm.classList.add("show");
            formTitle.textContent = "Entrar";
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");
    const toggleDarkMode = document.getElementById("toggle-dark-mode");

    // Verifica se o modo escuro já estava ativado
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleDarkMode.textContent = "☀️";
    }

    // Alternar modo escuro
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            const div = document.createElement("div");
            localStorage.setItem("dark-mode", "enabled");
            toggleDarkMode.textContent = "☀️";
        } else {
            const div = document.createElement("div");
            localStorage.setItem("dark-mode", "disabled");
            toggleDarkMode.textContent = "🌙";
            document.body.appendChild(div);
        }
    });

    document.getElementById("show-register").addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.add("hide");

        setTimeout(() => {
            loginForm.classList.add("hidden");
            loginForm.classList.remove("hide");

            registerForm.classList.remove("hidden");
            registerForm.classList.add("show");
            formTitle.textContent = "Cadastre-se";
        }, 500);
    });

    document.getElementById("show-login").addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.classList.add("hide");

        setTimeout(() => {
            registerForm.classList.add("hidden");
            registerForm.classList.remove("hide");

            loginForm.classList.remove("hidden");
            loginForm.classList.add("show");
            formTitle.textContent = "Entrar";
        }, 500);
    });
});

    
