/**
 * *****QUERY************
 * have two collection application and service_business(for all references)
 * Get all the applciation having status_id 604b14e73079a133133e8386
 * and last ref havinf type esign-pending
 * get app_id, user_id and ref_id
 */
db.getCollection('application').aggregate([
    {
        "$match": { "status_id": "604b14e73079a133133e8386", "is_deleted": false }
    },
    {
        "$addFields": { "app_id": { "$toString": "$_id" } }
    },
    {
        "$lookup": {
            "from": "service_business",
            "let": { "temp": "$app_id" },
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$eq": ["$app_id", "$$temp"]
                        },
                        "type": "esign-pending",
                        "is_deleted": false
                    }
                }
            ],
            "as": "business_references"
        }
    },
    {
        "$addFields": { "size": { "$size": "$business_references" } }
    },
    {
        "$match": { size: { $ne: 0 } }
    },
    {
        "$project": { "esign_pending_last_ref": { $arrayElemAt: ["$business_references", { $subtract: ["$size", 1] }] } }
    }
], { allowDiskUse: true }).toArray().map(t => { return { app_id: t.esign_pending_last_ref.app_id, user_id: t.esign_pending_last_ref.user_id, ref_id: t.esign_pending_last_ref.ref_id } })