AddEventHandler("playerConnecting", function(_, _, deferrals)
    local src = source
    deferrals.handover({
        name = GetPlayerName(src)
    })
end)
