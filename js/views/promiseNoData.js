function promiseNoData(promise, data, error) {
    if (!promise) {
        return <span>No data</span>
    }
    else if (promise && !data && !error) {
        return <img src="http://www.csc.kth.se/~cristi/loading.gif" alt="Loading..."/>
    }
    else if (promise && !data && error) {
        return <div>{error.toString()}</div>
    }
    else return false;
}