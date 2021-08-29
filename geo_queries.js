/**
  To calculate geometry over an Earth-like sphere, store your location data as GeoJSON objects.
 ** Format **
   <field>: { type: <GeoJSON type> , coordinates: <coordinates> }
 *
  To specify GeoJSON data, use an embedded document with:
      a field named type that specifies the GeoJSON object type and
      a field named coordinates that specifies the object's coordinates.

      If specifying latitude and longitude coordinates, list the longitude first and then latitude:
          Valid longitude values are between -180 and 180, both inclusive. east-west represents by 360 lines
          Valid latitude values are between -90 and 90, both inclusive. north-south represents by 180 lines

  Example:
    location: {
      type: "Point",
      coordinates: [-73.856077, 40.848447]
    }


  GeoJSON type:
          Point
          LineString
          Polygon
          MultiPoint
          MultiLineString
          MultiPolygon
          GeometryCollection

          For basic geoqueries : https://docs.mongodb.com/manual/geospatial-queries/
          For details GeoJSON type : https://docs.mongodb.com/manual/reference/geojson/

 */


// The following operation creates a 2dsphere index on the "location.geo" field:
db.getCollection('theaters').createIndex({ "location.geo": "2dsphere" });

/**
 * he following query uses the $near operator to return documents that are at least 10000 meters from and 
 * at most 50000 meters from the  * specified GeoJSON point, sorted in order from nearest to farthest:
 * 
 */
db.getCollection('theaters').find({
  "location.geo":
  {
    $near:
    {
      $geometry: {
        "type": "Point",
        "coordinates": [-86.509552, 36.164974]
      },
      $minDistance: 10000,
      $maxDistance: 50000
    }
  }
})

