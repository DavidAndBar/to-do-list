const deleteLoadingEffect = () => {
    try{
        document.getElementById("loader-div").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }
    catch {
        
    }
}

export default deleteLoadingEffect;