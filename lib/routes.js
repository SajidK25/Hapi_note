'use strict';
module.exports=[
    {

        method: 'GET',
        
        path: '/',
        
        handler: (request, reply) => {
        
        //reply('All the notes will appear here');
        return 'All the notes will appear here';
        
        },
        
        config:
        
        { description: 'Gets all the notes available'
        
        }
        
        },

    {

        method: 'POST',
        
        path: '/note',
        
        handler: (request, reply) => {
        
        // reply('New note');
        return 'New note';
        
        },
        
        config: {
        
        description: 'Adds a new note'
        
        } },
        
        {
        
        method: 'GET',
        
        path: '/note/{slug}',
        
        handler: (request, reply) => {
        
        //reply('This is a note');
        return 'This is a note';
        },
        
        config: {
        
        description: 'Gets the content of a note'
        
        }
        
        },
        
        {
        
        method: 'PUT',
        
        path: '/note/{slug}',
        
        handler: (request, reply) => {
        
        return 'Edit a note';
        
        },
        
        config: {
        
        description: 'Updates the selected note'
        
        }
        
        },
        
        {
        
        method: 'GET',
        
        path: '/note/{slug}/delete',
        
        handler: (request, reply) => {
        
        return 'This note no longer exists';
        
        },
        
        config: {
        
        description: 'Deletes the selected note'
        
        }
        
        },
];