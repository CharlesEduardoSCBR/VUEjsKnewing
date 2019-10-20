export default class FotoService {

    constructor(resource){
        this._resource = resource('v1/fotos{/id}');
    }

    buscarPor(id){
        return this
            ._resource.get({ id })
            .then(res => res.json());
    }

    cadastra(foto){

        if(foto._id){
            return this._resource
                .update({ id : foto._id }, foto);
        } else {
            return this._resource
            .save(foto);
        }
    }

    lista(){
        return this._resource
            .query()
            .then(res => res.json());
    }

    delete(id){
        return this._resource
            .delete({ id });
    }
}