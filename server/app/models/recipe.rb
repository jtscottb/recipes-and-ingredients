class Recipe < ActiveRecord::Base
    has_many :ingredients

    def self.create_new(id, name, instructions)
        self.create(id: id, name: name, instructions: instructions)
    end

    def delete(id)
        self.find(id).destroy
    end
end