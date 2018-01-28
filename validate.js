(function(dom, wnd) {
    wnd.Validate = function() {

        this.userinfo = function() {
            //Defines
            var name, surname, email, username, password, repeatpswd, form, regx_email, new_node, wrong;
            name = dom.querySelector('.user');
            surname = dom.querySelector('.surname');
            email = dom.querySelector('.email');
            username = dom.querySelector('.username');
            password = dom.querySelector('.password');
            repeatpswd = dom.querySelector('.repeat');
            form = dom.querySelector('.form');
            regx_email = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/", "g");



            //Accepts
            //Name
            name.addEventListener('keyup', function() {
                if (name.value == "") {
                    name.style.border = "1px solid red";
                    // var link =  ... get the `a` element from somewhere ...  ;
                    // function insertAfter(elem, refElem) {
                        // return refElem.parentNode.insertBefore(elem, refElem.nextElementSibling);
                    // }
                    // console.error('problem with next sibling in \"name\"');
                    new_node = dom.createElement('span');
                    new_node.style.color = "red";
                    new_node.parentNode.removeChild(new_node);
                    new_node.innerHTML = 'input field is not content';
                    // insertAfter(new_node, name);
                    /*new_node = document.createElement("div");
                    new_node.classList.add("tooltip");
                    new_node.innerHTML = html;
                    name.parentNode.insertBefore(new_node, name);*/

                } else {

                    name.style.borderColor = "green";
                }
            });

            //Surname
            surname.addEventListener('keyup', function(){
                surname.value == "" ? surname.style.border = "1px solid red" : surname.style.borderColor = "green";
            });

            //Email
            email.addEventListener('keyup', function() {
                if (email.value == "" && regx_email.test(email.value) == false) {
                    email.style.border = "1px solid red";
                } else {
                    email.style.borderColor = "green";
                }
            });

            //UserName
            username.addEventListener('keyup', function() {
                username.value == "" ? username.style.border = "1px solid red" : username.style.borderColor = "green";
            });

            //Password
            password.addEventListener('keyup', function() {
                password.value == "" ? password.style.border = "1px solid red" : password.style.borderColor = "green";
            });

            //RepeatPassword
            repeatpswd.addEventListener('keyup',function(){
            	repeatpswd.value == "" || repeatpswd.value != password.value ? repeatpswd.style.border = "1px solid red" : repeatpswd.style.borderColor = "green";
            });

            //submit
            form.addEventListener('submit', function(e){
            	if(email.value == "" && regx_email.test(email.value) == false || repeatpswd.value ==  "" || password.value == "" || username.value == "" || surname.value == "" || name.value == ""){
            		e.preventDefault();
            		form.style.border = "1px dotted red";
            	}else{
            		form.style.borderColor = "green";
            	}
            });


        }
        this.metadata = function() {

        }
    };
    var email_validate = new Validate();
    email_validate.userinfo();

})(document, window);