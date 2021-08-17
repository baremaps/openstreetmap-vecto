is_data_already_present() {
    TABLE_TO_CHECK=$1
    res=$(PGPASSWORD=$POSTGRES_PASSWORD psql -t -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER $POSTGRES_DB -c "SELECT count(*)<>0 FROM $TABLE_TO_CHECK" 2>/dev/null)
    if [[ $res == " t" ]]; then
        echo 1
    else
        echo 0
    fi
}
