// loginator :) //
        var link = document.querySelector(".login");
        var popup = document.querySelector(".modal-content");
        var close = popup.querySelector(".modal-content-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var storage = localStorage.getItem("login");
        var overlay = document.querySelector(".modal-overlay")    
        link.addEventListener("click", function(event){
          event.preventDefault();
            popup.classList.add("modal-content-show");
            overlay.classList.add("modal-content-show");
            if (storage) {
                login.value = storage;
                password.focus();
            } else{
                login.focus();
            }
        });
                  
        close.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        });
        
        form.addEventListener("submit", function(event){
            if (!login.value || !password.value) {
                event.preventDefault();
                popup.classList.add("modal-error");
            } else {
                localStorage.setItem("login", login.value);
            }
        });
        
        
        window.addEventListener("keydown",function(event) {
            if (event.keyCode === 27){
            if (popup.classList.contains("modal-content-show")){ popup.classList.remove("modal-content-show");
             overlay.classList.remove("modal-content-show");
                                                                
            }
          }
        });
// loginator :) END //
// map //
        var mapOpen = document.querySelector(".js-open-map");
        var mapPopup = document.querySelector(".modal-content-map");
        var mapClose = mapPopup.querySelector(".modal-content-close")
// map //
// map //
        mapOpen.addEventListener("click", function(event) {
          event.preventDefault();
            mapPopup.classList.add("modal-content-show");
            overlay.classList.add("modal-content-show");
        });
                  
        mapClose.addEventListener("click", function(event) {
            event.preventDefault();
            mapPopup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-content-show");
        });
                
        
        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27){
            if (mapPopup.classList.contains("modal-content-show")){ 
                mapPopup.classList.remove("modal-content-show");
                overlay.classList.remove("modal-content-show");
            }
          }
        });
// map //
// gallery //
var gallery = document.querySelector(".gallery");
    gallery.classList.add("gallery-live");
// button (BAD EXAMPLE) //
var buttons = '<button class="btn gallery-prev"         type="button">Назад </button>' + '<button class="btn gallery-next" type="button"> Вперед </button>';
        gallery.innerHTML = gallery.innerHTML + buttons;
// Start position buttons//
var prev = document.querySelector(".gallery-prev");
    prev.setAttribute('disabled', 'disabled');
//gallery end//
    