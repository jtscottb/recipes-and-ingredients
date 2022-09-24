class Ingredient < ActiveRecord::Base
    belongs_to :recipe

    def self.all_ingredients
        self.all.order(name: :asc).pluck(:name)
    end

    def self.all_measurements
        self.all.order(measurement: :asc).pluck(:measurement)
    end
    
end