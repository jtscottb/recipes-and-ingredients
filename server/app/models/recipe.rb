class Recipe < ActiveRecord::Base
    has_many :ingredients

    def self.create_new(id, name)
        self.create(id: id, name: name)
    end

    def delete(id)
        self.find(id).destroy
    end
end