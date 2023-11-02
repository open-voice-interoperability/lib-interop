// "invite"
// This establishes (or re-establishes) a conversational connection to an Assistant
//
// These are patterns for the GENERAL OVON ENVELOPES
// These are envelopes that human-endpoints and Assistants exchange
//
// The following is the ABSOLUTE MINIMUM for the SandBox(20231018)
const OVON_invite_NextAssistantSuperMin = {
    "ovon": {
        "conversation": {
            "id": "someUniqueIdCreatedByTheFirstParticipant"
        },
        "sender": {
            "from": "https://someBotThatOfferedTheInvite.com"
        },
        "responseCode" : 200,
        "events": [
            {
                "eventType": "invite",
                "parameters": {
                    "to": {
                        "url": "https://someBotThatIsBeingInvited.com"
                    }
                }
            }
        ]
    }
}

//
// The following adds an input for the SandBox(20231018)
// "utterance" is "spoken/typed" input
// "whisper" is a silent message that may contain useful info, hints, etc.
//    They are optional. If they are missing the invited Assistant will do a cold open.
//
const OVON_invite_NextAssistantWithUttOrWhisper = {
    "ovon": {
        "conversation": {
            "id": "someUniqueIdCreatedByTheFirstParticipant"
        },
        "sender": {
            "from": "https://someBotThatOfferedTheInvite.com"
        },
        "responseCode" : 200,
        "events": [
            {
                "eventType": "invite",
                "parameters": {
                    "to": {
                        "url": "https://someBotThatIsBeingInvited.com"
                    }
                }
            },
            {
                "eventType": "utterance",
                "parameters": {
                    "dialogEvent": {
                        "speakerId": "humanOrAssistantID",
                        "span": { "startTime": "2023-06-14 02:06:07+00:00" },
                        "features": {
                            "text": {
                                "mimeType": "text/plain",
                                "tokens": [ { "value": "Nice to meet you Ms SomeBot."  } ]
                            }
                        }
                    }
                }
            },
            {
                "eventType": "whisper",
                "parameters": {
                    "dialogEvent": {
                        "speakerId": "humanOrAssistantID",
                        "span": { "startTime": "2023-06-14 02:06:07+00:00" },
                        "features": {
                            "text": {
                                "mimeType": "text/plain",
                                "tokens": [ { "value": "Weather: Detroit Michigan" } ]
                            }
                        }
                    }
                }
            }
        ]
    }
}
