exports = async function(eventsArray){
const z = require("zod");
 const team_id = new BSON.ObjectId("63c35cba41b4e501eff75f94");

const eventSchema = z.object({
  _id: z.instanceof(BSON.ObjectId),
  event: z.string(),
  payload: z.any(),
  entity: z.string().optional(),
  team_id: z.instanceof(BSON.ObjectId),
});
async function createEventObjects(eventsArray) {
    return eventsArray.map(eventEl => {
    
      const {event, payload, entity} = eventEl
    
        let eventObj = {
            _id: new BSON.ObjectId(),
            event,
            payload,
            entity,
            team_id,
        };
    eventSchema.parse(eventObj);
        if (event.entity === "user") {
            if (!context.user || !context.user.custom_data || !context.user.custom_data.user_id) {
                throw new Error('Invalid user context');
            }
            eventObj.user_id = new BSON.ObjectId(context.user.custom_data.user_id);
        }

        return eventObj;
    });
}
    
    const events = context.services.get("mongodb-atlas").db("media").collection("events");
    
    const eventObjects = await createEventObjects(eventsArray);
    
    return await events.insertMany(eventObjects);

};
