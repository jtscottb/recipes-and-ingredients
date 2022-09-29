class Recipe < ActiveRecord::Base
    has_many :ingredients

    def self.create_new(name, instructions, picture)
        self.create(name: name, instructions: instructions, picture: picture)
    end

    def delete(id)
        self.find(id).destroy
    end
end