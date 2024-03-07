class LocalStore{
    storeTax(data) {
        localStorage.setItem("simpleTax", data);
    }
    getTax() {
        return localStorage.getItem("simpleTax");
    }
    removeTax() {
        localStorage.removeItem("simpleTax")
    }
}
export default LocalStore = new LocalStore()