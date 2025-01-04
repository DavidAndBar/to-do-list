const loginUser = (URL, email, password) =>{
    const loginOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email, password: password})
      }
    fetch(URL, loginOptions)
    .then(res => res.json().then(async result => {
        if (result.message) {
            const expDate = new Date();
            expDate.setTime(expDate.getTime() + 365*24*60*60*1000) // 1 year
            document.cookie = `token=${res.headers.get("auth-token")};expires=${expDate.toUTCString()}`;
            document.cookie = `username=${res.headers.get("username")};expires=${expDate.toUTCString()}`;
            window.location.href = '/';
        } else {
            // logic here to show the user wrong credentials
        }}));
}


export default loginUser;