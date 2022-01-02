const Categorie = () => {
    return (
      <div className="cat">
          <h3  className="text-center mt-2 mb-2">Categories</h3>


                  <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" >
                Blog for web
                </button>
                <button type="button" class="list-group-item list-group-item-action">Blog for mobile</button>
                <button type="button" class="list-group-item list-group-item-action">Blogs for ML/DL</button>
                <button type="button" class="list-group-item list-group-item-action">Blog for DEVOPS</button>
                <button type="button" class="list-group-item list-group-item-action">Blog for Cloud </button>
                </div>
      </div>
    );
}

export default Categorie;