class Pagination {

    constructor(items, itemsPerPage) {
        this.items = items;
        this.itemsPerPage = itemsPerPage;
    }

    getPage(pageid) {
        let items = this.items;
        let itemsToShow = pageid * this.itemsPerPage;
        return items.slice(itemsToShow - this.itemsPerPage, itemsToShow);
    }

}

module.exports = { Pagination }
