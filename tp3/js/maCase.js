function maCase() {
    this.isNewValue = false
    this.value = ''

    this.isEmpty = () => {
        return this.value === '';
    }
}