// "bye"
// The conversation continues until the Assistant conversing
//    with the human determines it is done and sends a "bye" event
//
// These are patterns for the GENERAL OVON ENVELOPES
// This is the OVON envelope to SAY GOODBYE to an Assistant
//
// The following is the ABSOLUTE MINIMUM for the SandBox(20231018)
// The default behavior will be to return to the previous Assistant

const OVON_ByeSuperMin = {
    "ovon": {
        "conversation": {
            "id": "someUniqueIdCreatedByTheFirstParticipant"
        },
        "sender": {
            "from": "https://someBotThatOfferedTheBye.com"
        },
        "responseCode" : { "code": 200} ,
        "events": [
	        {
                 "eventType" : "bye",
            }
        ]
    }
}

// Adding an "utterance" will support the Assistant's goodbye message (recommended?).
const OVON_ByeWithUtt = {
    "ovon": {
        "conversation": {
            "id": "someUniqueIdCreatedByTheFirstParticipant"
        },
        "sender": {
            "from": "https://someBotThatOfferedTheBye.com"
        },
        "responseCode" : { "code": 200} ,
        "events": [
            {
                "eventType": "utterance",
                "parameters": {
                    "dialogEvent": {
                        "speakerId": "AssistantID",
                        "span": { "startTime": "2023-06-14 02:06:07+00:00" },
                        "features": {
                            "text": {
                                "mimeType": "text/plain",
                                "tokens": [ { "value": "Thank you! I am glad I could help."  } ]
                            }
                        }
                    }
                }
            },
	        {
                 "eventType" : "bye",
            }
        ]
    }
}
