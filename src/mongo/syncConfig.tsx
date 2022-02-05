import React from 'react';


const syncConfig = (user: any, schema: any[]) => {
    const OpenRealmBehaviorConfiguration = {
        type: 'openImmediately',
    };
    const config: any = {
        schema: schema,
        sync: {
        // ToDO: implement user.id as the partition value for later iterations
        user: user,
        partitionValue: user.id,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
        },
    };
  return config
};

export default syncConfig
